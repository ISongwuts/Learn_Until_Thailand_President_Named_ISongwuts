"use strict";
class Button {
}
class CheckBox {
}
class DarkButton extends Button {
    render() {
        console.log('Dark button rendering.');
    }
}
class LightButton extends Button {
    render() {
        console.log('Light button rendering.');
    }
}
class DarkCheckBox extends CheckBox {
    render() {
        console.log('Dark check box rendering.');
    }
}
class LightCheckBox extends CheckBox {
    render() {
        console.log('Light check box rendering.');
    }
}
class UIElementFactory {
}
class DarkTheme extends UIElementFactory {
    createButton() {
        return new DarkButton();
    }
    createCheckBox() {
        return new DarkCheckBox();
    }
}
class LightTheme extends UIElementFactory {
    createButton() {
        return new LightButton();
    }
    createCheckBox() {
        return new LightCheckBox();
    }
}
function application(factory) {
    const button = factory.createButton();
    const checkbox = factory.createCheckBox();
    // Call with invoke the function
    button.render();
    checkbox.render();
}
const darkThemeFactory = new DarkTheme();
application(darkThemeFactory);
const lightThemeFactory = new LightTheme();
application(lightThemeFactory);
