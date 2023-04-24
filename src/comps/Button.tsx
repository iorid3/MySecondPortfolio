import React from "react";
import { Button, ButtonProps } from "@mui/material";

type CustomButtonProps = ButtonProps & {
  children: React.ReactNode;
  onClick: () => void;
};

export default function CustomButton(props: CustomButtonProps) {
  const { children, onClick, ...rest } = props;

  return (
    <Button onClick={onClick} {...rest}>
      {children}
    </Button>
  );
}
