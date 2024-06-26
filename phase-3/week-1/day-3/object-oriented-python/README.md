# Object Oriented Programming in Python

Agenda:

- Object Oriented Programming
- Benefits and Principles of OOP Design
  - Organized
  - Concerns Contained
  - Can describe things in a virtual space
- Classes
  - The blueprint or factory of a concept
- Instances
  - The individual product of a concept created from the factory or blueprint that's made up of methods and properties / attributes
- Initializing with attributes using init
  - runs when the object (instance) is first created (instantiated)
- Instance methods
  - Methods that an instance can call
- Self
  - refers to the instance in an instance method
- Object properties
  - getter / setter methods that help get / set attributes of an instance. Can be used in order to add extra functionality such as error handling when assigning attributes. (Example: Username must exist and can't be blank)
- Class variables
  - Variables that are in the factory / blueprint scope. These won't change and are static. Instances have access to them but it's not the instances job to maintain them.
- Class methods
  - Methods called on the class that are not instance specific.
- Object inheritance
  - A way that we can inherit attributes / methods from another class (aka a super class / parent class)
- Stretch Topic: Super
  - a way that we can define a method with the same name while still using the method defined in the parent with the same name.