import './style.css'

export const Header = ({ className, children }) => <header className={className}>{children}</header>

export const Image = ({ src, className, alt }) => < img src={src} className={className} alt={alt} />

export const P = ({ className, children }) => <p className={className}>{children}</p>

export const Span = ({ className, children }) => <span className={className}>{children}</span>

export const H1 = ({ className, children }) => <h1 className={className}>{children}</h1>
export const H2 = ({ className, children }) => <h2 className={className}>{children}</h2>
export const H3 = ({ className, children }) => <h3 className={className}>{children}</h3>
export const H4 = ({ className, children }) => <h4 className={className}>{children}</h4>
export const H5 = ({ className, children }) => <h5 className={className}>{children}</h5>
export const H6 = ({ className, children }) => <h6 className={className}>{children}</h6>

export const Flex = ({ className, children }) => <div className={className ? `${className} flex` : `flex`}>{children}</div>

export const Button = ({ className, onClick, children }) => (
    <button
        type="button"
        className={className}
        onClick={onClick}
    >
        {children}
    </button>
)