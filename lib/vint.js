import { defineComponent as l, openBlock as _, createElementBlock as i, renderSlot as a } from "vue";
const r = {
  name: "vint-button"
}, u = /* @__PURE__ */ l({
  ...r,
  emits: ["click"],
  setup(t) {
    return (n, e) => (_(), i("button", {
      class: "vint-button",
      onClick: e[0] || (e[0] = (o) => n.$emit("click", o))
    }, [
      a(n.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const d = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [o, c] of n)
    e[o] = c;
  return e;
}, p = /* @__PURE__ */ d(u, [["__scopeId", "data-v-d7a4be74"]]), s = {
  install(t) {
    t.component("vint-button", p);
  }
}, v = {
  install(t) {
    var n;
    (n = s.install) == null || n.call(s, t);
  }
};
export {
  p as Button,
  s as ButtonPlugin,
  v as default
};
