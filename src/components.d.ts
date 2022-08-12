/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppForm {
    }
    interface AppRedux {
    }
    interface ComInput {
        "label": string;
        "name": string;
        "onChangeValue": (e: MouseEvent) => void;
        "type": string;
    }
    interface PageAbout {
    }
    interface PageContact {
    }
    interface PageHome {
    }
    interface TabsComponent {
    }
}
declare global {
    interface HTMLAppFormElement extends Components.AppForm, HTMLStencilElement {
    }
    var HTMLAppFormElement: {
        prototype: HTMLAppFormElement;
        new (): HTMLAppFormElement;
    };
    interface HTMLAppReduxElement extends Components.AppRedux, HTMLStencilElement {
    }
    var HTMLAppReduxElement: {
        prototype: HTMLAppReduxElement;
        new (): HTMLAppReduxElement;
    };
    interface HTMLComInputElement extends Components.ComInput, HTMLStencilElement {
    }
    var HTMLComInputElement: {
        prototype: HTMLComInputElement;
        new (): HTMLComInputElement;
    };
    interface HTMLPageAboutElement extends Components.PageAbout, HTMLStencilElement {
    }
    var HTMLPageAboutElement: {
        prototype: HTMLPageAboutElement;
        new (): HTMLPageAboutElement;
    };
    interface HTMLPageContactElement extends Components.PageContact, HTMLStencilElement {
    }
    var HTMLPageContactElement: {
        prototype: HTMLPageContactElement;
        new (): HTMLPageContactElement;
    };
    interface HTMLPageHomeElement extends Components.PageHome, HTMLStencilElement {
    }
    var HTMLPageHomeElement: {
        prototype: HTMLPageHomeElement;
        new (): HTMLPageHomeElement;
    };
    interface HTMLTabsComponentElement extends Components.TabsComponent, HTMLStencilElement {
    }
    var HTMLTabsComponentElement: {
        prototype: HTMLTabsComponentElement;
        new (): HTMLTabsComponentElement;
    };
    interface HTMLElementTagNameMap {
        "app-form": HTMLAppFormElement;
        "app-redux": HTMLAppReduxElement;
        "com-input": HTMLComInputElement;
        "page-about": HTMLPageAboutElement;
        "page-contact": HTMLPageContactElement;
        "page-home": HTMLPageHomeElement;
        "tabs-component": HTMLTabsComponentElement;
    }
}
declare namespace LocalJSX {
    interface AppForm {
    }
    interface AppRedux {
    }
    interface ComInput {
        "label"?: string;
        "name"?: string;
        "onChangeValue"?: (e: MouseEvent) => void;
        "type"?: string;
    }
    interface PageAbout {
    }
    interface PageContact {
    }
    interface PageHome {
    }
    interface TabsComponent {
    }
    interface IntrinsicElements {
        "app-form": AppForm;
        "app-redux": AppRedux;
        "com-input": ComInput;
        "page-about": PageAbout;
        "page-contact": PageContact;
        "page-home": PageHome;
        "tabs-component": TabsComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-form": LocalJSX.AppForm & JSXBase.HTMLAttributes<HTMLAppFormElement>;
            "app-redux": LocalJSX.AppRedux & JSXBase.HTMLAttributes<HTMLAppReduxElement>;
            "com-input": LocalJSX.ComInput & JSXBase.HTMLAttributes<HTMLComInputElement>;
            "page-about": LocalJSX.PageAbout & JSXBase.HTMLAttributes<HTMLPageAboutElement>;
            "page-contact": LocalJSX.PageContact & JSXBase.HTMLAttributes<HTMLPageContactElement>;
            "page-home": LocalJSX.PageHome & JSXBase.HTMLAttributes<HTMLPageHomeElement>;
            "tabs-component": LocalJSX.TabsComponent & JSXBase.HTMLAttributes<HTMLTabsComponentElement>;
        }
    }
}
