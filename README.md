# Greet-Greet

![npm](https://img.shields.io/npm/v/greet-greet)
![downloads](https://img.shields.io/npm/dt/greet-greet)
![license](https://img.shields.io/npm/l/greet-greet)
![React Native](https://img.shields.io/badge/React%20Native-5196B0?style=flat&logo=react)

Greet-Greet is a flexible and customizable multi-select dropdown component for React Native. Designed for simplicity and performance, it provides developers with an intuitive way to implement multi-selection functionality in their applications. It supports dynamic styling, custom rendering, and is easy to integrate into existing projects.

## Features

- 🖌️ **Custom Rendering**: Fully customize the input, dropdown items, and selected items.
- 🎨 **Dynamic Styling**: Easily apply styles to seamlessly match your app’s theme.
- 🚀 **Lightweight and Fast**: Minimal dependencies and optimized for performance.
- 🔄 **Add New Items**: Dynamically add new items directly from the dropdown.
- 🧩 **Extensive Control**: Configure selection limits, handle custom behavior, and more.

## Key Properties

| Feature            | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| **Ease of Use**     | Simple to set up and use, with minimal configuration required.              |
| **Customizability** | Supports custom input fields, dropdown items, and close icons.              |
| **Performance**     | Optimized to handle large datasets and mobile performance constraints.      |
| **Dynamic Updates** | Allows adding new items dynamically when no matches are found.             |
| **Cross-Platform**  | Works seamlessly across React Native environments (Android and iOS).        |
| **Extensibility**   | Highly configurable with custom render functions and event callbacks.       |
| **Comprehensive Docs** | Detailed documentation with examples and usage guides.                |

## Props

| Prop Name             | Type       | Default                        | Description                                                               |
|-----------------------|------------|--------------------------------|---------------------------------------------------------------------------|
| **data**              | `array`    | `[]`                           | List of items to display in the dropdown.                                 |
| **placeholder**       | `string`   | `"Search or add category"`      | Placeholder text for the input field.                                     |
| **maxSelectable**     | `number`   | `5`                            | Maximum number of items a user can select.                                |
| **onSelect**          | `func`     | `() => {}`                     | Callback function triggered when items are selected.                      |
| **renderInput**       | `func`     | `null`                         | Custom render function for the input field.                               |
| **renderDropdownItem**| `func`     | `null`                         | Custom render function for dropdown items.                                |
| **renderAddItem**     | `func`     | `null`                         | Custom render function for the "Add Item" option.                         |
| **renderCloseIcon**   | `func`     | `null`                         | Custom render function for the close icon in selected items.              |


### Explanation:
- **Key Properties**: The table now clearly outlines the features and their descriptions.
- **Installation**: Instructions are provided for both `npm` and `Yarn`.
- **API Reference**: Detailed prop information is included for developers to understand the customization options available.
- **License & Contributions**: Standard sections for open-source contributions and licensing.



## Usage

The snippet below shows how the component can be used:

```javascript
import GreetGreet from 'greet-greet';

const App = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (selected) => {
    setSelectedItems(selected);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>      
      <GreetGreet
        data={['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']}
        placeholder="Select items"
        maxSelectable={3}
        onSelect={handleSelect}
        renderInput={(props) => <TextInput {...props} />}
        renderDropdownItem={(item) => <Text>{item}</Text>}
        renderAddItem={(props) => <Text {...props}>Add Item</Text>}
        renderCloseIcon={(item) => <Icon name="close" />}
      />
    </View>
  );
};

export default App;
```
## Installation

You can install **Greet-Greet** via npm or Yarn:

```bash
# Using npm
npm install greet-greet

# Using Yarn
yarn add greet-greet

```