# 🚀 React Component Library Assessment (Vite + Storybook)

This project is a small, reusable UI component library built to fulfill the requirements of the Front-end JS Engineer technical assessment.

---

## 🎯 Project Goal

The primary goal was to implement three complex UI components—**Input**, **Toast**, and **Sidebar Menu**—demonstrating strong proficiency in React functional components, TypeScript, component modularity, and comprehensive documentation via Storybook.

## ⚙️ Technology Stack & Code Quality

* **Core:** React (Functional Components) + TypeScript (Strict Mode)
* **Build Tool:** Vite
* **Documentation:** **Storybook** (Fully Configured)
* **Styling:** CSS Modules (`.module.css`)
* **Icons:** **Lucide React** (for clean, professional SVG icons)
* **Quality Tools:** **ESLint** and **Prettier** (configured for strict, consistent formatting).

---

## 🛠️ Setup and Running Locally

To run the component library and view the documentation, follow these steps:

1.  **Clone the Repository:**
    ```bash
    git clone [YOUR_REPOSITORY_URL]
    cd [your-project-directory]
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Run Storybook (Development Server):**
    ```bash
    npm run storybook
    ```
    The Storybook environment will open automatically in your browser at `http://localhost:6006`.

---

## 📦 Component Documentation & Screenshots

The following sections showcase the required components, their functionality, and visual documentation of their key states as displayed in Storybook.

### 1. 📥 Input Component (Smart Input Field)

**Implementation:** Controlled component with logic for toggling password visibility and clearing the input value.

| Feature Demo | Description | Screenshot |
| :--- | :--- | :--- |
| **Password Visibility Toggle** | Demonstrates the state change between `type="password"` and `type="text"` using the **Lucide Eye/EyeOff** icon. |  |
| **Clearable Input (`clearable=true`)** | Shows the **Lucide X** icon when the input has text, allowing the user to quickly clear the value via the controlled component logic. |  |

***

### 2. 🔔 Toast Component (Non-Blocking Feedback)

**Implementation:** Fixed position (bottom right) component with **CSS keyframe animations** for smooth slide-in/slide-out, and auto-dismissal logic managed by `useEffect`.

| Feature Demo | Description | Screenshot |
| :--- | :--- | :--- |
| **Success Toast (Auto-Dismiss)** | A standard success notification (`type="success"`) demonstrating its fixed position and automatic slide-out animation after the `duration` expires. |  |
| **Warning Toast (Manual Close)** | Shows a notification where `duration=0`, requiring the user to manually close it using the **Lucide X** button, validating the interaction logic. |  |

***

### 3. 📚 Sidebar Menu Component (Nested Navigation)

**Implementation:** Full-screen component with **CSS transitions** for sliding animation, **recursive rendering** for nested items (accordion), and a `useEffect` listener for **click-outside** closing logic.

| Feature Demo | Description | Screenshot |
| :--- | :--- | :--- |
| **Opened State & Sliding Animation** | The sidebar is open, demonstrating the smooth transition from the right side of the screen. |  |
| **Nested Items (Accordion Logic)** | Shows the sidebar with a multi-level item expanded (e.g., 'Reports' or 'Products'), validating the recursive rendering structure and accordion behavior. |  |

---

## ✅ Deliverables Checklist

The following items are confirmed complete:

* [x] Implemented all three required UI components.
* [x] Storybook setup correctly documents all component states and prop variations.
* [x] All code is written using **TypeScript** with strict enforcement.
* [x] All components use **CSS Modules** for scoped styling.
* [x] Code is clean and modular.