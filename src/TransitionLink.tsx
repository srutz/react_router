import { flushSync } from "react-dom";
import { useLocation, useNavigate } from "react-router-dom";

/*
 * Use TransitionLink instead of react-router-dom's Link or NavLink
 * and you will experience page transitions
 * 
 * You can customize the transition in various ways. check the docs at
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/startViewTransition
 */

export type TransitionLinkProps = {
    to: string;
    children: React.ReactNode;
}

/*
 * Magic sauce for making router-links animated
 * use instead of react-router-dom's Link or NavLink
 */
export function TransitionLink(props: TransitionLinkProps) {
    const { to, children } = props
    const navigate = useNavigate()
    const location = useLocation()
    const active = location.pathname === to

    const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        if (document.startViewTransition) {
            document.startViewTransition(() => {
                flushSync(() => { navigate(to) })
            })
        } else {
            // fallback for older browsers
            navigate(to)
        }
    }
    return (
        <a href={to} onClick={onClick} className={active ? "active" : ""} aria-current={active ? "page" : undefined}>
            {children}
        </a>
    )
}
