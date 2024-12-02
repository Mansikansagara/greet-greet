import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

const Dropdown = ({
  data = [],
  placeholder = "Search or add category",
  maxSelectable = 5,
  onSelect = () => {},
  renderInput = null, // Custom input render function
  renderDropdownItem = null, // Custom dropdown item render function
  renderAddItem = null, // Custom add item render function
  renderCloseIcon = null, // Custom close icon render function
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [filteredData, setFilteredData] = useState(data);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    if (!dropdownOpen) {
      setFilteredData(data);
      setSearchTerm("");
    }
  };

  const handleSearch = (text) => {
    setSearchTerm(text);
    const filtered = data.filter((item) =>
      item.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
    setDropdownOpen(true);
  };

  const selectItem = (item) => {
    if (selectedItems.includes(item)) {
      const updatedItems = selectedItems.filter((selected) => selected !== item);
      setSelectedItems(updatedItems);
      onSelect(updatedItems);
    } else if (selectedItems.length < maxSelectable) {
      const updatedItems = [...selectedItems, item];
      setSelectedItems(updatedItems);
      onSelect(updatedItems);
    } else {
      alert(`You can only select a maximum of ${maxSelectable} items.`);
    }
    setSearchTerm("");
  };

  const addItem = () => {
    if (!data.includes(searchTerm) && searchTerm.trim() !== "") {
      const newData = [...data, searchTerm];
      setFilteredData(newData);
      const updatedItems = [...selectedItems, searchTerm];
      setSelectedItems(updatedItems);
      onSelect(updatedItems);
      setSearchTerm("");
      setDropdownOpen(false);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setDropdownOpen(false);
      }}
    >
      <View style={styles.container}>
        {/* Customizable Input */}
        <View style={styles.inputContainer}>
          {renderInput ? (
            renderInput({
              placeholder,
              value: searchTerm,
              onFocus: () => setDropdownOpen(true),
              onChangeText: handleSearch,
              toggleDropdown,
              dropdownOpen,
            })
          ) : (
            <>
              <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={searchTerm}
                onFocus={() => setDropdownOpen(true)}
                onChangeText={handleSearch}
              />
              <TouchableOpacity onPress={toggleDropdown} style={styles.toggleButton}>
                <Text>{dropdownOpen ? "▲" : "▼"}</Text>
              </TouchableOpacity>
            </>
          )}
        </View>

        {dropdownOpen && (
          <View style={styles.dropdown}>
            <ScrollView nestedScrollEnabled style={styles.scrollView}>
              {filteredData.length > 0 ? (
                filteredData.map((item) =>
                  renderDropdownItem ? (
                    renderDropdownItem({ item, onSelect: () => selectItem(item) })
                  ) : (
                    <TouchableOpacity
                      key={item}
                      onPress={() => selectItem(item)}
                      style={[
                        styles.dropdownItem,
                        selectedItems.includes(item) && styles.selectedItem,
                      ]}
                    >
                      <Text>{item}</Text>
                    </TouchableOpacity>
                  )
                )
              ) : renderAddItem ? (
                renderAddItem({ searchTerm, onAdd: addItem })
              ) : (
                <TouchableOpacity onPress={addItem} style={styles.addItem}>
                  <Text>Add "{searchTerm}"</Text>
                </TouchableOpacity>
              )}
            </ScrollView>
          </View>
        )}

        {!dropdownOpen && (
          <View style={styles.selectedContainer}>
            {selectedItems.map((item) => (
              <View key={item} style={styles.selectedItemContainer}>
                <Text>{item}</Text>
                <TouchableOpacity
                  onPress={() => selectItem(item)}
                  style={styles.removeButton}
                >
                  {renderCloseIcon ? (
                    renderCloseIcon(item)
                  ) : (
                    <Text>✕</Text>
                  )}
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
    marginBottom: 10,
    height: 70,
    width: "90%",
    borderRadius: 20,
    borderTopColor: "#FFF",
    paddingLeft: 16,
    paddingRight: 16,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0,
    shadowRadius: 20,
    elevation: 4,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  toggleButton: {
    height: 60,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  dropdown: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    maxHeight: 200,
    backgroundColor: "#fff",
  },
  scrollView: {
    padding: 10,
  },
  dropdownItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  selectedItem: {
    backgroundColor: "#f0f0f0",
  },
  addItem: {
    padding: 10,
  },
  selectedContainer: {
    marginTop: 10,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  selectedItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
    marginBottom: 5,
  },
  removeButton: {
    marginLeft: 5,
  },
});

export default Dropdown;
