import {
    aR as d,
    _ as l,
    d as m,
    c as p,
    o as g
} from "./index.7e3cc507.js";
import {
    Z as u,
    i as c,
    c as f,
    g as w,
    a as h,
    d as _,
    e as s
} from "./addDocumentElements.b1320649.js";
const x = ({
               domain: e,
               pageNoindex: t
           }) => {
        const n = window.origin.includes("https://latest-user-app.zyro.com"),
            o = u.some(a => window.origin.includes(a)),
            i = d.some(a => window.origin.includes(a)),
            r = !!t || (o || i) && !c;
        return {
            shouldRedirectToCanonical: false,
            noindex: r
        }
    },
    C = m({
        props: {
            pageNoindex: {
                type: Boolean,
                default: !1
            },
            domain: {
                type: String,
                default: ""
            },
            canonicalUrl: {
                type: String,
                default: ""
            },
            siteMeta: {
                type: Object,
                default: null
            }
        },
        setup(e) {
            const {
                shouldRedirectToCanonical: t,
                noindex: n
            } = x({
                domain: e.domain,
                pageNoindex: e.pageNoindex
            });
            if (e.siteMeta) {
                const o = w(window.location.hostname),
                    i = h(`z-cookies-consent-${o}`) !== "0";
                _({
                    siteMeta: e.siteMeta,
                    areCookiesAllowed: i
                })
            }
            return n && s({
                type: "element",
                tagName: "meta",
                properties: {
                    name: "robots",
                    content: "noindex"
                }
            }), t && s({
                type: "element",
                tagName: "meta",
                properties: {
                    "http-equiv": "refresh",
                    content: `0; url=${e.canonicalUrl}`
                }
            }), s({
                type: "element",
                tagName: "meta",
                properties: {
                    name: "generator",
                    content: "Hostinger Website builder"
                }
            }), {
                shouldRedirectToCanonical: t,
                noindex: n
            }
        }
    });

function N(e, t, n, o, i, r) {
    return g(), p("div")
}
const W = l(C, [
    ["render", N]
]);
export {
    W as
        default
};