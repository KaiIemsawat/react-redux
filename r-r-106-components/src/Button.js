import className from "classnames";

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    ...rest // ! anything else
}) {
    const classes = className(
        rest.className, // ! to use className prop direct in <Button> in App.js
        "px-3 py-1.5 border rounded-md flex items-center",
        {
            "bg-blue-500 text-stone-200 border-slate-300 text-stone-100":
                primary,
            "bg-slate-300 text-stone-900 border-yellow-400 text-pink-600":
                secondary,
            "bg-green-500 text-stone-200 border-slate-100 text-blue-500":
                success,
            "bg-yellow-500 text-stone-200 border-red-400 text-stone-700":
                warning,
            "bg-red-700 text-stone-200 border-orange-400 text-stone-100":
                danger,
        }
    );

    return (
        // ! and use {...rest}
        <button {...rest} className={classes}>
            {children}
        </button>
    );
}

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
        const count =
            Number(!!primary) +
            Number(!!secondary) +
            Number(!!success) +
            Number(!!warning) +
            Number(!!danger);

        if (count > 1) {
            return new Error(
                "Only one of primary, secondary, success, warning, and danger can be true"
            );
        }
    },
};

export default Button;
