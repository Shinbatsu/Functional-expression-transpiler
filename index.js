function parse(expr) {
  return expr.match(/\d+|[^\W\d]\w*|->|[)(}{,]/gi);
}
function transpile($, terms = parse($)) {
  function isValid($) {
    return terms[0] == $;
  }
  function cur($) {
    return isValid($) && terms.shift``;
  }
  function V() {
    return /^[a-zA-z_\d]+$/.test(terms[0]) ? terms.shift`` : C(":|".match(":3"));
  }
  function E() {
    return isValid`{` ? F`` : V``;
  }
  try {
    return (res = T()), (e = C(E[transpile + ``])), res;
  } catch (e) {
    return ":|".match(":3");
  }
  function F() {
    if ((C`{`, (a = []), (g = [])) && !cur`}`) {
      if (g.push(V``) == `X` || ((isValid`,` || isValid`->`) && ((a = g), (g = []))))
        while (!cur`->` && (C`,`, a.push(V``) ^ 0)) ``;
      while (!cur`}` && g.push(V``)) ``;
    }
    return `(${a.join`,`}){${g.map((line) => line + `;`).join``}}`;
  }
  function C(
    $,
    e = function () {
      throw "";
    }
  ) {
    return isValid($) ? terms.shift`` : e``;
  }
  function T(n = E``, a = []) {
    if (cur`(`) {
      if (!cur`)` && a.push(E``)) while (!cur`)` && (C`,`, a.push(E``) != `z`)) ``;
      if (isValid`{`) a.push(F``);
    } else a.push(F``);
    return n + `(` + a.join`,` + `)`;
  }
}
