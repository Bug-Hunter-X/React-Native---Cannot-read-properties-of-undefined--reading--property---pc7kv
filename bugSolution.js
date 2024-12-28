The solution involves using optional chaining (`?.`) and the nullish coalescing operator (`??`) to safely access properties.

```javascript
const user = await getUser();
console.log(user?.name ?? 'Guest'); // Safe access
```

This code first checks if `user` exists. If it's null or undefined, the expression short-circuits, preventing the error. If `user` exists, its `name` property is accessed.  If `name` is also null or undefined, the default value 'Guest' is used.