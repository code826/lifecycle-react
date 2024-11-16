import React, { Component, createRef } from "react";

class CircularMenu extends Component {
  constructor(props) {
    super(props);
    this.circleRef = createRef();
    this.state = {
      selectedMenu: null,
      isDragging: false,
    };
    this.menuItems = ["Music", "Settings", "Games", "Photos"]; // Example menu items
  }

  calculateAngle(x, y, centerX, centerY) {
    const dx = x - centerX;
    const dy = y - centerY;
    let angle = Math.atan2(dy, dx) * (180 / Math.PI); // Convert to degrees
    if (angle < 0) angle += 360; // Keep angles positive
    return angle;
  }

  handlePointerDown = () => {
    this.setState({ isDragging: true });
  };

  handlePointerMove = (e) => {
    const { isDragging } = this.state;
    if (!isDragging || !this.circleRef.current) return;

    const rect = this.circleRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const angle = this.calculateAngle(e.clientX, e.clientY, centerX, centerY);

    // Determine which menu item to select based on the angle
    const segment = 360 / this.menuItems.length;
    const index = Math.floor(angle / segment);

    this.setState({ selectedMenu: this.menuItems[index] });
  };

  handlePointerUp = () => {
    this.setState({ isDragging: false });
  };

  render() {
    const { selectedMenu } = this.state;

    return (
      <div
        ref={this.circleRef}
        style={{
          position: "relative",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          border: "2px solid #000",
        }}
        onPointerDown={this.handlePointerDown}
        onPointerMove={this.handlePointerMove}
        onPointerUp={this.handlePointerUp}
      >
        <div style={{ textAlign: "center", marginTop: "130px" }}>
          {selectedMenu ? `Selected: ${selectedMenu}` : "Navigate the menu"}
        </div>
        {this.menuItems.map((item, index) => {
          const angle = (360 / this.menuItems.length) * index;
          const radians = (angle * Math.PI) / 180;
          const x = 150 + 100 * Math.cos(radians) - 20; // Adjust for item size
          const y = 150 + 100 * Math.sin(radians) - 20; // Adjust for item size
          return (
            <div
              key={item}
              style={{
                position: "absolute",
                top: `${y}px`,
                left: `${x}px`,
                width: "40px",
                height: "40px",
                textAlign: "center",
                lineHeight: "40px",
                borderRadius: "50%",
                background: selectedMenu === item ? "#00f" : "#ccc",
                color: "#fff",
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    );
  }
}

export default CircularMenu;
