import { EditorProps } from "draft-js";
import { ButtonHTMLAttributes, CSSProperties, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> { }

export interface IFieldProps {
  placeholder: string;
  error?: FieldError;
}

type TypeIntpurPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps;

export interface IField extends TypeIntpurPropsField { }

type TypeEditorPropsField = EditorProps & IFieldProps;
export interface ITextEditor extends Omit<TypeEditorPropsField, 'editorState'> {
  onChange: (...event: any[]) => void;
  value: string;
}

export interface IUploadField {
  folder?: string;
  image?: string;
  onChange?: (...event: any[]) => void;
  placeholder: string;
  error?: FieldError;
  style?: CSSProperties;
  isNoImage: boolean;
}
