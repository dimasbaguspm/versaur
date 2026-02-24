import { formGroupStyles } from "@versaur/core/blocks"
import { forwardRef } from "react"

import { cx } from "../../../utils/cx"
import type { FormGroupFieldProps, FormGroupProps, FormGroupSeparatorProps } from "./form-group.types"

/**
 * FormGroup Root Component
 *
 * A grid-based form layout container. Sets CSS grid and passes columns to nested fields.
 *
 * @example
 * ```tsx
 * <FormGroup columns="repeat(2, 1fr)">
 *   <FormGroup.Field>
 *     <Label>Name</Label>
 *     <TextInput />
 *   </FormGroup.Field>
 * </FormGroup>
 * ```
 */
function FormGroupRoot({ columns = "1fr", children, className, style, ...rest }: FormGroupProps, ref: any) {
  return (
    <form
      ref={ref}
      className={cx(formGroupStyles["form-group"], className)}
      style={
        {
          "--_columns": columns,
          ...style,
        } as React.CSSProperties
      }
      {...rest}
    >
      {children}
    </form>
  )
}

export const FormGroupRootComponent = forwardRef<HTMLFormElement, FormGroupProps>(FormGroupRoot)
FormGroupRootComponent.displayName = "FormGroup"

/**
 * FormGroup.Field - A grid item container for form controls
 */
export const FormGroupField = forwardRef<HTMLDivElement, FormGroupFieldProps>(
  ({ area, children, className, style, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cx(formGroupStyles["field"], className)}
        style={
          {
            "--_area": area,
            ...style,
          } as React.CSSProperties
        }
        {...rest}
      >
        {children}
      </div>
    )
  },
)

FormGroupField.displayName = "FormGroup.Field"

/**
 * FormGroup.Separator - A full-width horizontal separator
 */
export const FormGroupSeparator = forwardRef<HTMLHRElement, FormGroupSeparatorProps>(({ className, ...rest }, ref) => {
  return <hr ref={ref} className={cx(formGroupStyles["separator"], className)} {...rest} />
})

FormGroupSeparator.displayName = "FormGroup.Separator"

/**
 * FormGroup Compound Component
 */
export interface FormGroupComponent extends React.ForwardRefExoticComponent<
  FormGroupProps & React.RefAttributes<HTMLFormElement>
> {
  Field: typeof FormGroupField
  Separator: typeof FormGroupSeparator
}

export const FormGroup = Object.assign(FormGroupRootComponent, {
  Field: FormGroupField,
  Separator: FormGroupSeparator,
}) as unknown as FormGroupComponent
