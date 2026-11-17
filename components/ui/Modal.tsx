import type { HTMLAttributes } from "react";

type ModalProps = HTMLAttributes<HTMLDivElement>;

export default function Modal(props: ModalProps) {
  return <div {...props} />;
}
