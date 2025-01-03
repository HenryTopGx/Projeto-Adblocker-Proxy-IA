import {F as t, bi as e, bj as s, _ as i, n as h, h as a} from "./icon-5a31292c.js";
import {E as o} from "./shell-94a8f423.js";
var n, l, f, p, r, c;
let y = class extends t {
    constructor() {
        super(...arguments),
        this.open = !1,
        n.set(this, void 0),
        l.set(this, new o(this)),
        this._firstUpdate = !0,
        this.updated = t=>{
            t.has("open") && !this._firstUpdate && (this.open ? e(this, f, "f").call(this) : e(this, p, "f").call(this)),
            this._firstUpdate = !1
        }
        ,
        f.set(this, (()=>{
            e(this, n, "f").style.display = "block",
            this.offsetHeight !== e(this, n, "f").offsetHeight && (d(this, e(this, n, "f").offsetHeight),
            e(this, n, "f").style.opacity = "1")
        }
        )),
        p.set(this, (()=>{
            0 !== this.offsetHeight && (d(this, 0),
            e(this, n, "f").style.opacity = "0")
        }
        )),
        r.set(this, (()=>{
            this.open ? this.style.height = "" : (this.open = !1,
            e(this, n, "f").style.display = "none"),
            this.style.overflowY = "visible"
        }
        )),
        c.set(this, e(this, l, "f").define("transitionend", e(this, r, "f")))
    }
    connectedCallback() {
        super.connectedCallback(),
        s(this, n, this.querySelector("[faceplate-auto-height-animator-content]"), "f"),
        null != e(this, n, "f") && (this.style.transition = "height 222ms ease",
        e(this, n, "f").style.transition = "opacity 222ms ease",
        this.open || (this.style.height = "0px",
        e(this, n, "f").style.display = "none"),
        this.setAttribute("connected", ""))
    }
    createRenderRoot() {
        return this
    }
}
;
function d(t, e) {
    t.style.height = `${t.offsetHeight}px`,
    t.style.overflowY = "hidden",
    window.requestAnimationFrame((()=>{
        t.style.height = `${e}px`
    }
    ))
}
n = new WeakMap,
l = new WeakMap,
f = new WeakMap,
p = new WeakMap,
r = new WeakMap,
c = new WeakMap,
i([h({
    type: Boolean,
    reflect: !0
})], y.prototype, "open", void 0),
y = i([a("faceplate-auto-height-animator")], y);
export {y as FaceplateAutoHeightAnimator};
//# sourceMappingURL=faceplate-auto-height-animator-1fb0985e.js.map
