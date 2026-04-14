// TODO: Type this component so that:
// 1. `severity` only accepts 'info' | 'warning' | 'error' | 'success'
// 2. `title` is a required string
// 3. `onDismiss` is an optional callback with no arguments
// 4. All remaining native <div> props (className, role, aria-*, etc.) are forwarded and type-checked

import type { MouseEventHandler } from "react";

type AlertProps<T extends React.ElementType = "button"> = {
  as?: T;
  severity?: 'info' | 'warning' | 'error' | 'success';
  title?: string;
  children?: React.ReactNode;
  onDismiss?: MouseEventHandler;
  className?: string;
} & Omit<
  React.ComponentProps<T>,
  "as" | "className" | "children" | "onDismiss"
>;

function Alert<T extends React.ElementType>({
  severity,
  title,
  children,
  onDismiss,
  className,
  ...props
}: AlertProps<T>) {
  const severityStyles = {
    info: "bg-blue-50 border-blue-200 text-blue-800",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
    error: "bg-red-50 border-red-200 text-red-800",
    success: "bg-green-50 border-green-200 text-green-800",
  } as const;

  return (
    <>
      <div
        role="alert"
        className={`rounded border p-4 ${severityStyles[severity || "info"]} ${className || ""}`}
        {...props}
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="font-semibold">{title}</p>
            {children && <div className="mt-1 text-sm">{children}</div>}
          </div>
          {onDismiss && (
            <button onClick={onDismiss} className="ml-4 text-lg leading-none">
              &times;
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export { Alert };
