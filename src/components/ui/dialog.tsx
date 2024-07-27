// components/ui/dialog.tsx
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button"; // Ensure the Button component is correctly imported

export const CustomDialog = ({ open, onOpenChange, children }) => (
  <Dialog.Root open={open} onOpenChange={onOpenChange}>
    <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
    <Dialog.Content className="fixed inset-0 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <Dialog.Close className="absolute top-3 right-3">
          <Cross2Icon />
        </Dialog.Close>
        {children}
      </div>
    </Dialog.Content>
  </Dialog.Root>
);
