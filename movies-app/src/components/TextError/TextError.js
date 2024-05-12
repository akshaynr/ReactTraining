import './TextError.css';

const TextError = ({ children }) => {
    return (
        <div class="error mt-2">
            {children}
        </div>
    )
}

export default TextError;