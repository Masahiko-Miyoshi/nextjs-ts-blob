---
title: 'Framer Motionチートシート'
date: '2022-06-02'
category: React.js
tags:
    - React.js
    - Framer Motion
    - Animation Library
---

## Animation
### Simple animations
#### Mount animations
`initial={false}`で、デフォルトが`animate`になる。
```js
<motion.div animate={{ x: 100 }} initial={false} />
```

#### Keyframes
配列で指定することで、keyframesを使える。`transition`propの`times`から、タイミングを指定することも可能。
```js
<motion.circle
  cx={500}
  animate={{ cx: [null, 100, 200] }}
  transition={{ duration: 3, times: [0, 0.2, 1] }}
/>
```

### Variants
#### Dynamic variants
`custom`propに変数を渡すと、`variants`配下で使用できる。
```js
const variants = {
  visible: i => ({
    opacity: 1,
    transition: {
      delay: i * 0.3,
    },
  }),
  hidden: { opacity: 0 },
}

return items.map((item, i) => (
  <motion.li
    custom={i}
    animate="visible"
    variants={variants}
  />
));
```

### Component animation controls

#### Sequencing
`start`メソッドは`Promise`を返すので、アニメーションの実行後さらに、別のアニメーションを発火するといったことが可能となる。

```js
const sequence = async () => {
  await menuControls.start({ x: 0 });
  return await itemControls.start({ opacity: 1 });
};
```

### Dynamic `start`
`start`メソッドに`custom`を受け取る関数を渡せば、`motion`コンポーネントの`custom`を使用して動的にアニメーションを実行できる。

## Animate single values
<!-- todo -->


## Layout animations
`layout`propを指定すると、レイアウトにかかわる部分のアニメーションが可能となる。

### Scale correction
親子関係がある場合は、親子共々`layout`propを指定する。
```js
<motion.div
  layout
  data-isOpen={isOpen}
  initial={{ borderRadius: 50 }}
  className="parent"
  onClick={() => setIsOpen(!isOpen)}
>
  <motion.div layout className="child" />
</motion.div>
```

### Shared layout animations
同一の`layoutId`を持つコンポーネントは、アニメーションを継承する。





### Orchestration
- `delay`: number
- `delayChildren`: number
- `staggerChildren`: number
- `staggerDirection`: 1 | -1
- `when`:
  | 'beforeChildren'
  | 'afterChildren'
- `repeat`: number | 'Infinity'
- `repeatType`
  | 'loop'
  | 'reverse'
  | 'mirror'
- `repeatDelay`: number



## MotionValue
```js
const x = useMotionValue(0);
return <motion.div drag="x" style={{ x }} />;
```

### useTransform()
: (input, inputRange, outputRange, options)
```js
const input = [-200, 0, 200];
const output = [0, 1, 0];
const opacity = useTransform(x, input, output);
```

: (input, transformer)
```js
const y = useTransform(x, latest => latest * 2);

const z = useTransform([x, y], [latestX, latestY] => latestX * latestY);
```

### useSpring()
: (source, config)
```js
const x = useSpring(0, { stiffness: 300 });
const y = useSpring(x, { damping: 10 });
```

### useTime()
```js
const time = useTime();
const rotate = useTransform(
  time,
  [0, 1000], // milliseconds
  [0, 360]
);
```



## Utilities
### useAnimation()
`AnimationControls`を生成する。

### useCycle()
: (items) -> CycleState<T>

### useReducedMotion()