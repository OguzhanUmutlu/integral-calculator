onmessage = ev => {
    const d = ev.data;
    const negate = d.a > d.b ? -1 : 1;
    if (d.a > d.b) {
        const oA = d.a;
        d.a = d.b;
        d.b = oA;
    }
    let r = 0;
    for (let x = d.a; x < d.b; x += d.dx) r += eval(d.f)(x) * d.dx;
    r *= negate;
    postMessage({id: d.id, r});
};