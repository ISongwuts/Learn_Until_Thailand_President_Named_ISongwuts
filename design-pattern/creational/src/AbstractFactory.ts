abstract class Button {
    abstract render(): void
}

abstract class CheckBox {
    abstract render(): void
}

class DarkButton extends Button {
    render(){
        console.log('Dark button rendering.')
    }
}

class LightButton extends Button {
    render(){
        console.log('Light button rendering.')
    }
}

class DarkCheckBox extends CheckBox {
    render(){
        console.log('Dark check box rendering.')
    }
}

class LightCheckBox extends CheckBox {
    render(){
        console.log('Light check box rendering.')
    }
}

interface IUIElementFactory {
    createButton(): Button
    createCheckBox(): CheckBox
}

abstract class UIElementFactory implements IUIElementFactory {
    abstract createButton(): Button
    abstract createCheckBox(): CheckBox
}

class DarkTheme extends UIElementFactory {
    createButton(): Button {
        return new DarkButton()
    }
    createCheckBox(): CheckBox {
        return new DarkCheckBox()
    }
}

class LightTheme extends UIElementFactory {
    createButton(): Button {
        return new LightButton()
    }
    createCheckBox(): CheckBox {
        return new LightCheckBox()
    }
}

function application(factory: UIElementFactory){
    const button = factory.createButton()
    const checkbox = factory.createCheckBox()

    // Call with invoke the function
    button.render()
    checkbox.render()
}

const darkThemeFactory = new DarkTheme()
application(darkThemeFactory)

const lightThemeFactory = new LightTheme()
application(lightThemeFactory)

