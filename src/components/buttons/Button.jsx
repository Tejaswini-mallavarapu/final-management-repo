
const Button = ({children,variant = "primary",className = "",onClick,...props
    }) => {
    return (
        <button
        className={`btn btn-${variant} ${className}`}
        {...props}
        >
        {children}
        </button>
    );
    };

export default Button;