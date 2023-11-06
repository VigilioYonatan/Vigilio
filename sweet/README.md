# @Vigilio/SWEET

A simple library to open Modal or alert

### Getting Started

### MODAL

```ts
import from "@vigilio/src/vigilio-sweet.min.css"
import {sweetModal} from "@vigilio/sweet";
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    sweetModal({}).then((res)=>{
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

### ALERT

```ts
import from "@vigilio/src/vigilio-sweet.min.css"
import {sweetAlert} from "@vigilio/sweet";

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    sweetAlert({}).then((res)=>{
        if(res.isConfirmed){
            console.log("ok");

        }
    });
});

export interface SwalAlertProps {
    title: string;
    icon?: Icon;
    customIcon?: string | HTMLElement;
    html?: string | HTMLElement;
    showCloseButton?: boolean;
    timer?: number; // 3 = 3seg
    position?: string; // "top:20px;right:20px";
    height?: number;
    width?: number;
}

```
