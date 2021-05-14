---
title: Border
---

<masthead title="Border Classes" description="Use these utility classes to set element borders." />

## Border

These classes can be applied using the following format <br/>
`u-border-{direction}`

The **direction** designates the side the property applies to:

- `t` - applies the border to `top`.
- `r` - applies the border to `right`.
- `b` - applies the border to `bottom`.
- `l` - applies the border to `left`.
- `h` - applies the border to both `*-left` and `*-right`.
- `v` - applies the border to both `*-top` and `*-bottom`.
- If left empty, applies the border in all directions. (Ex: `u-border`)

## Border Radius

These classes can be applied using the following format <br/>
`u-br-{direction}-{size}`

The **direction** designates the side, the property applies to:

- `t` - applies the border radius to both `top-left` & `top-right`.
- `tl` - applies the border radius to `top-left`.
- `tr` - applies the border radius to `top-left`.
- `b` - applies the border radius to both `bottom-left` & `bottom-right`.
- `bl` - applies the border radius to `bottom-left`.
- `br` - applies the border radius to `bottom-right`.
- `l` - applies the border radius to both `bottom-left` & `top-left`.
- `r` - applies the border radius to both `bottom-right` & `top-right`.
- If left empty/skipped, it sets border-radius of all sides to `4px`. (Ex: `u-br`, `u-br-xl`)

The **size** controls the increment of border property:

- `0` - sets border-radius to `0`.
- `sm` - sets border-radius to `2px`.
- If left empty, sets border-radius to `4px`. (Ex: `u-br-t`, `u-br`)
- `lg` - sets border-radius to `6px`.
- `xl` - sets border-radius to `8px`.
