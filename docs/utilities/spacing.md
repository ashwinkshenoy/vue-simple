---
title: Spacing
---

<masthead title="Spacing" description="Spacing helpers are useful for modifying the padding and margin of an element.">
</masthead>

## How It Works

These classes can be applied using the following format <br/>
`u-{property}{direction}-{size}.`

The **property** applies the type of spacing:

- `m` - applies margin.
- `p` - applies padding.

The **direction** designates the side, the property applies to:

- `t` - applies the spacing for `margin-top` or `padding-top`.
- `r` - applies the spacing for `margin-right` or `padding-right`.
- `b` - applies the spacing for `margin-bottom` or `padding-bottom`.
- `l` - applies the spacing for `margin-left` or `padding-left`.
- `h` - applies the spacing for both `*-left` and `*-right`.
- `v` - applies the spacing for both `*-top` and `*-bottom`.
- If left empty, applies the spacing for the property in all directions. (Ex: `u-p`, `u-m`)

The **size** controls the increment of the property:

- `xxs` - sets `margin` or `padding` to 4px.
- `xs` - sets `margin` or `padding` to 8px.
- `sm` - sets `margin` or `padding` to 12px.
- If left empty, sets `margin` or `padding` to 20px. (Ex: `u-pt`, `u-mt`)
- `lg` - sets `margin` or `padding` to 32px.
- `xl` - sets `margin` or `padding` to 40px.
- `xxl` - sets `margin` or `padding` to 48px.
