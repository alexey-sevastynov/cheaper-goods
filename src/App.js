import React from "react";

import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Layout from "./components/Layout/Layout";
import MainPage from "./components/page/MainPage";
import ResultPage from "./components/page/ResultPage";

class App extends React.Component {
  state = {
    input_1: { value: "", active: false },
    input_2: { value: "", active: false },
    input_3: { value: "", active: false },
    input_4: { value: "", active: false },
    priceKgItem_1: null,
    priceKgItem_2: null,
    togglePage: false,
  };

  changeInput_1 = (e) => {
    this.setState(({ input_1 }) => {
      return {
        input_1: { ...input_1, value: e.target.value },
      };
    });
  };
  changeInput_2 = (e) => {
    this.setState(({ input_2 }) => {
      return {
        input_2: { ...input_2, value: e.target.value },
      };
    });
  };
  changeInput_3 = (e) => {
    this.setState(({ input_3 }) => {
      return {
        input_3: { ...input_3, value: e.target.value },
      };
    });
  };
  changeInput_4 = (e) => {
    this.setState(({ input_4 }) => {
      return {
        input_4: { ...input_4, value: e.target.value },
      };
    });
  };

  inputActive_1 = () => {
    this.setState(({ input_1, input_2, input_3, input_4 }) => {
      return {
        input_1: { ...input_1, active: true },
        input_2: { ...input_2, active: false },
        input_3: { ...input_3, active: false },
        input_4: { ...input_4, active: false },
      };
    });
  };
  inputActive_2 = () => {
    this.setState(({ input_1, input_2, input_3, input_4 }) => {
      return {
        input_1: { ...input_1, active: false },
        input_2: { ...input_2, active: true },
        input_3: { ...input_3, active: false },
        input_4: { ...input_4, active: false },
      };
    });
  };
  inputActive_3 = () => {
    this.setState(({ input_1, input_2, input_3, input_4 }) => {
      return {
        input_1: { ...input_1, active: false },
        input_2: { ...input_2, active: false },
        input_3: { ...input_3, active: true },
        input_4: { ...input_4, active: false },
      };
    });
  };
  inputActive_4 = () => {
    this.setState(({ input_1, input_2, input_3, input_4 }) => {
      return {
        input_1: { ...input_1, active: false },
        input_2: { ...input_2, active: false },
        input_3: { ...input_3, active: false },
        input_4: { ...input_4, active: true },
      };
    });
  };

  actionButton = (position) => {
    const { input_1, input_2, input_3, input_4 } = this.state;

    const inputNumber = (pos) => {
      if (input_1.active && position === pos) {
        this.setState(({ input_1 }) => {
          return {
            input_1: { ...input_1, value: input_1.value + pos },
          };
        });
      }
      if (input_2.active && position === pos) {
        this.setState(({ input_2 }) => {
          return {
            input_2: { ...input_2, value: input_2.value + pos },
          };
        });
      }
      if (input_3.active && position === pos) {
        this.setState(({ input_3 }) => {
          return {
            input_3: { ...input_3, value: input_3.value + pos },
          };
        });
      }
      if (input_4.active && position === pos) {
        this.setState(({ input_4 }) => {
          return {
            input_4: { ...input_4, value: input_4.value + pos },
          };
        });
      }
    };

    if (position <= 9) {
      inputNumber(position);
    }

    if (input_1.active && position === 12) {
      const removeLastSymbol = input_1.value.slice(0, -1);
      this.setState(({ input_1 }) => {
        return {
          input_1: { ...input_1, value: removeLastSymbol },
        };
      });
    }

    if (input_2.active && position === 12) {
      const removeLastSymbol = input_2.value.slice(0, -1);
      this.setState(({ input_2 }) => {
        return {
          input_2: { ...input_2, value: removeLastSymbol },
        };
      });
    }

    if (input_3.active && position === 12) {
      const removeLastSymbol = input_3.value.slice(0, -1);
      this.setState(({ input_3 }) => {
        return {
          input_3: { ...input_3, value: removeLastSymbol },
        };
      });
    }

    if (input_4.active && position === 12) {
      const removeLastSymbol = input_4.value.slice(0, -1);
      this.setState(({ input_4 }) => {
        return {
          input_4: { ...input_4, value: removeLastSymbol },
        };
      });
    }

    if (input_1.active && position === 11) {
      const { value } = input_1;
      const lengthNumber = input_1.value.length;

      if (value[lengthNumber - 1] !== "," && value.includes(",") === false) {
        const removeLastSymbol = value + ",";
        this.setState(({ input_1 }) => {
          return {
            input_1: { ...input_1, value: removeLastSymbol },
          };
        });
      }
    }

    if (input_2.active && position === 11) {
      const { value } = input_2;
      const lengthNumber = input_2.value.length;

      if (value[lengthNumber - 1] !== "," && value.includes(",") === false) {
        const removeLastSymbol = value + ",";
        this.setState(({ input_2 }) => {
          return {
            input_2: { ...input_2, value: removeLastSymbol },
          };
        });
      }
    }

    if (input_3.active && position === 11) {
      const { value } = input_3;
      const lengthNumber = input_3.value.length;

      if (value[lengthNumber - 1] !== "," && value.includes(",") === false) {
        const removeLastSymbol = value + ",";
        this.setState(({ input_3 }) => {
          return {
            input_3: { ...input_3, value: removeLastSymbol },
          };
        });
      }
    }

    if (input_4.active && position === 11) {
      const { value } = input_4;
      const lengthNumber = input_4.value.length;

      if (value[lengthNumber - 1] !== "," && value.includes(",") === false) {
        const removeLastSymbol = value + ",";
        this.setState(({ input_4 }) => {
          return {
            input_4: { ...input_4, value: removeLastSymbol },
          };
        });
      }
    }
  };

  result = () => {
    const { input_1, input_2, input_3, input_4, togglePage } = this.state;

    const weightItem_1 = +input_1.value.replace(",", ".");
    const priceItem_1 = +input_2.value.replace(",", ".");
    const weightItem_2 = +input_3.value.replace(",", ".");
    const priceItem_2 = +input_4.value.replace(",", ".");

    const oneKgItem_1 = ((priceItem_1 / weightItem_1) * 1000).toFixed(1);
    const oneKgItem_2 = ((priceItem_2 / weightItem_2) * 1000).toFixed(1);

    this.setState({ priceKgItem_1: oneKgItem_1, priceKgItem_2: oneKgItem_2 });

    this.setState(({ togglePage }) => {
      return {
        togglePage: !togglePage,
      };
    });
  };

  cleaner = () => {
    this.setState(({ input_1, input_2, input_3, input_4 }) => {
      return {
        input_1: { ...input_1, value: "" },
        input_2: { ...input_2, value: "" },
        input_3: { ...input_3, value: "" },
        input_4: { ...input_4, value: "" },
      };
    });
  };

  render() {
    const {
      input_1,
      input_2,
      input_3,
      input_4,
      priceKgItem_1,
      priceKgItem_2,
      togglePage,
    } = this.state;

    return (
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                actionButton={this.actionButton}
                actionButton_Remove={this.actionButton_Remove}
                result={this.result}
                cleaner={this.cleaner}
                togglePage={togglePage}
              />
            }
          >
            <Route
              index
              element={
                <MainPage
                  input_1={input_1}
                  changeInput_1={this.changeInput_1}
                  input_2={input_2}
                  changeInput_2={this.changeInput_2}
                  input_3={input_3}
                  changeInput_3={this.changeInput_3}
                  input_4={input_4}
                  changeInput_4={this.changeInput_4}
                  inputActive_1={this.inputActive_1}
                  inputActive_2={this.inputActive_2}
                  inputActive_3={this.inputActive_3}
                  inputActive_4={this.inputActive_4}
                  priceKgItem_1={priceKgItem_1}
                  priceKgItem_2={priceKgItem_2}
                />
              }
            />
            <Route
              path="result"
              element={
                <ResultPage
                  priceKgItem_1={priceKgItem_1}
                  priceKgItem_2={priceKgItem_2}
                />
              }
            />
          </Route>
        </Routes>

        {/* <Header
            input_1={input_1}
            changeInput_1={this.changeInput_1}
            input_2={input_2}
            changeInput_2={this.changeInput_2}
            input_3={input_3}
            changeInput_3={this.changeInput_3}
            input_4={input_4}
            changeInput_4={this.changeInput_4}
            inputActive_1={this.inputActive_1}
            inputActive_2={this.inputActive_2}
            inputActive_3={this.inputActive_3}
            inputActive_4={this.inputActive_4}
            priceKgItem_1={priceKgItem_1}
            priceKgItem_2={priceKgItem_2}
          />
          <Footer
            actionButton={this.actionButton}
            actionButton_Remove={this.actionButton_Remove}
            result={this.result}
            cleaner={this.cleaner}
          /> */}
      </div>
    );
  }
}

export default App;
