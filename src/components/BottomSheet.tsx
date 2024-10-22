import React, {forwardRef, useCallback} from 'react';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProps,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {BottomSheetDefaultBackdropProps} from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';

export type BottomSheetProps = BottomSheetModalProps & {
  children?: React.ReactNode;
  paddingHorizontal?: number;
  bottomBackgroundColor?: string;
};

export const BottomSheet = forwardRef<BottomSheetModal, BottomSheetProps>(
  ({children, bottomBackgroundColor = 'white', ...props}, reference) => {
    const renderBackdrop = useCallback(
      (backdropProps: BottomSheetDefaultBackdropProps) => (
        <BottomSheetBackdrop
          {...backdropProps}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
        />
      ),
      [],
    );

    return (
      <BottomSheetModal
        ref={reference}
        enableDynamicSizing
        backdropComponent={renderBackdrop}
        {...props}>
        <BottomSheetView>{children}</BottomSheetView>
      </BottomSheetModal>
    );
  },
);

BottomSheet.displayName = 'BottomSheet';
