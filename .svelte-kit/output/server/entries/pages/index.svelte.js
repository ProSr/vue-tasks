import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component } from "../../chunks/index-2835083a.js";
const Nested = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { version } = $$props;
  let { speed } = $$props;
  let { website } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.version === void 0 && $$bindings.version && version !== void 0)
    $$bindings.version(version);
  if ($$props.speed === void 0 && $$bindings.speed && speed !== void 0)
    $$bindings.speed(speed);
  if ($$props.website === void 0 && $$bindings.website && website !== void 0)
    $$bindings.website(website);
  return `<p>The <code>${escape(name)}</code> package is ${escape(speed)} fast.
	Download version ${escape(version)} from <a href="${"https://www.npmjs.com/package/" + escape(name)}">npm</a>
	and <a${add_attribute("href", website, 0)}>learn more here</a></p>`;
});
const _3_spread_props = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const pkg = {
    name: "svelte",
    version: 3,
    speed: "blazing",
    website: "https://svelte.dev"
  };
  return `
${validate_component(Nested, "Info").$$render($$result, Object.assign(pkg), {}, {})}
`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(_3_spread_props, "Task").$$render($$result, {}, {}, {})}`;
});
export { Routes as default };
