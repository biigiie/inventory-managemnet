# INTRODUCTION
The Inventory Tracker System is a feature-rich software program that simplifies and maximizes inventory management. The system's main goal is to offer a single platform for inventory data tracking, management, and analysis, guaranteeing effective control and insight into stock levels.
# SCOPE OF THE SOFTWARE
Tracking Inventory
The main goal of the Inventory Management Tracker is to  efficiently oversee and control the complete lifecycle of inventory items. It encompasses functionalities for real-time monitoring, updating, and organizing inventory data across various i, ensuring accurate and timely insights into stock levels. With a focus on simplicity and user-friendly features, the software aims to streamline inventory management processes, reduce manual efforts, and enhance overall operational efficiency for businesses of all sizes.

**Software Requirements** To make effective use of the Inventory Tracking feature, users need access to the following:

+ **User Account**: Create and manage a personalized account to gain authorized access to the Inventory Tracking system, ensuring security and individualized tracking preferences.

+ **Product Entry**: Input detailed information about inventory items, including product names, descriptions, quantity, and current stock status, to maintain an accurate and comprehensive inventory database.

+ **Category Labels**: Utilize category labels or tags to effectively organize and classify inventory items based on product type, department, or other relevant criteria for streamlined inventory management.

+ **Transaction Log**: Access and manage a digital transaction log that provides a chronological overview of all inventory-related activities, including additions, deductions, and adjustments, ensuring transparency and auditability.

+ **User-Friendly Interface**: The system should offer an intuitive and user-friendly interface, allowing users to navigate through the inventory tracking features effortlessly. This includes functionalities for easy data entry, retrieval, and analysis to promote a positive user experience.

By satisfying these software requirements, users can effectively harness the Inventory Tracking feature to maintain an organized, up-to-date, and efficiently managed inventory system.
# USED SOFTWARE ARCHITECTURE

As a result of its inherent benefits in flexibility, scalability, and maintainability, a Microservices architecture is selected as the best paradigm for the Inventory Management Tracker.

In summary, the incorporation of a Microservices architecture enhances the Inventory Management Tracker's ability to adapt to diverse user needs, scale efficiently, and maintain optimal performance as the application evolves.

***Key Considerations:***

**Flexibility:** The inventory system is divided into smaller, independent services by the microservices design. This layout makes it easier to develop, implement, and scale individual components, giving you the flexibility to adjust to changing inventory management needs.

**Scalability:** The Inventory Management Tracker can scale individual functions in response to demand by dividing the program into independently deployable microservices. This guarantees optimal performance and effective resource allocation, supporting expanding inventory and changing business requirements.

**Maintainability:** The Inventory Management Tracker's generic architecture, made possible by microservices, makes maintenance easier. Because problems and upgrades are limited to particular services, it is simpler to improve, update, and debug individual inventory items without having an impact on the system as a whole. This method increases the system's robustness and endurance by streamlining the maintenance process overall.

# SOFTWARE DESIGN AND MODEL
**Add Item**

![Class UML diagram](https://github.com/biigiie/inventory-managemnet/assets/106522136/86e17713-21b2-438f-98f5-30b0bbe52c53)

**Transaction Log**

![Assignment 4 UML Diagram](https://github.com/biigiie/inventory-managemnet/assets/106522136/713e6574-1383-4121-a886-5ab03fb23580)

**Build Pipeline**

![Build Pipeline](https://github.com/biigiie/inventory-managemnet/assets/106522136/50e56fe6-c94f-4a04-99ab-837e3752d1dd)

Teamcity dashboard screenshot showing the bugs that were found and fixed to result into a successful build pipeline.

# TEST CASES
- [ ] Add Items
- [ ] Update Items
- [ ] Mark item added

# USED TECHNOLOGIES
**Technologies Used**

**HTML:** HTML (Hypertext Markup Language) is used for structuring the content of web pages.
Documentation: [HTML documentation](https://www.w3schools.com/html/).

**JavaScript:** JavaScript is a programming language that enables dynamic and interactive behavior on web pages.
Documentation: [JavaScript documentation](https://www.w3schools.com/js/).


**CSS:** CSS (Cascading Style Sheets) is used for styling the HTML elements, providing a visually appealing presentation.
Documentation: [CSS documentation](https://https://www.w3schools.com/css/).

**Git:** Git is a distributed version control system used for tracking changes in the source code during development.
Documentation: [Git documentation](https://git-scm.com/doc).

**GitHub:** GitHub is a web-based platform for hosting and collaborating on Git repositories, facilitating team collaboration.
Documentation: [Git documentation](https://docs.github.com/en).

**Team city:** TeamCity is a general-purpose CI/CD software platform that allows for flexible workflows, collaboration and development practices.
Documentation: [Team city CI/CD documentation](https://www.jetbrains.com/teamcity/ci-cd-guide/).


> [!NOTE]
> This project embraces simplicity and does not heavily rely on external tools or frameworks, providing a lightweight and straightforward solution for tracking reading progress with the essential use of HTML, JavaScript, and CSS.

> Feel free to customize and enhance the code to suit your specific requirements. Happy reading! 📚
