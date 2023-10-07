# @Vigilio/SWEET

A simple library to open Modal or alert

### Getting Started

### BASIC

```ts
import from "@vigilio/src/vigilio-sweet.css"
import sweet from "@vigilio/sweet";
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    sweet({}).then((res)=>{
        if(res.isConfirmed){
            console.log("ok");
            // you can use sweet
        }
    });
});
```
### PROPS

```ts
export type Icon = "danger" | "success" | "warning" | "info";
export interface SwalProps {
    title?: string;
    text?: string;
    icon?: Icon;
    customIcon?: string | HTMLElement;
    html?: string | HTMLElement;
    showCloseButton?: boolean;
    showCancelButton?: boolean;
    confirmButtonText?: string;
    confirmButtonAriaLabel?: string;
    cancelButtonText?: string;
    cancelButtonAriaLabel?: string;
    showConfirmButton?: boolean;
    timer?: number;
    position?: "center" | "end" | "start";
}
```
