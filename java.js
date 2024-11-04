// ----------------------------------------------ENCAPSULATION----------------------------------------

// ---------Private:
//  only within the class.cannot be accessed from outside the class.
// Private methods cannot be overridden. They are not visible to subclasses, so you cannot change their behavior in derived classes.
// you cannot create a subclass of a class that has a private constructor.
// Top-level classes/Outer class cannot be private they must be either public or package-private.
// static members of a class can be private.
// You can’t reduce the visibility of a method while overriding it.like in parent class you have public method and in child class you have this method void it wont run
// 

// ---------Default: 
// only within the package. It cannot be accessed from outside the package.
//  If you do not specify any access level, it will be the default.
// In Java, methods with default access (no modifier specified) can be overridden in subclasses, but only if those subclasses are in the same package.
//  A method of super class with default access modifier can be overridden as protected or public but not as private. True or false?

// --------Protected:
//  only within the package and outside the package through child class.
//  If you do not make the child class, it cannot be accessed from outside the package.
//  This modifier can be overridden in a subclass.
//  A protected method in a superclass can remain protected or be changed to public in the subclass.
//  Yes,we can declare class as protectedbut only inner class. Outer class can not be protected.

//--------- Public:
//  can be access  everywhere. 
// public methods can be overridden,must remain public or can be changed to a more restrictive access modifier (like protected).

//--------- Static:
// Static methods can be called without creating an instance of the class.
// Static methods can access other static members of the class or its parent classes.
// In your code, methodOfC() accesses the static variable s directly due to inheritance, which is why it works without instantiation.
//  Method Overriding shows dynamic polymorphism.
// static methods cannot be overridden in Java.
// If you make any class constructor private, you cannot create the instance of that class from outside the class.
// class A{  
//     private A(){}//private constructor  
//     void msg(){System.out.println("Hello java");}  
//     }  
//     public class Simple{  
//      public static void main(String args[]){  
//        A obj=new A();//Compile Time Error  
//      }  
//     } 

// ----------------------------------------------INHERITENCE----------------------------------------

// Subclasses do not inherit constructors from their parent classes.
// Each class must define its own constructors.
// Static members are also inherited to sub classes.

// ----------------------------------------------ABSTRACTION----------------------------------------


// abstract methods can not be static.
// abstract class is designed to serve as a base for other classes and cannot be instantiated directly.
// 
// 
// 
// 
// 
// 


// ----------------------------------------------INTERFACE----------------------------------------

// Methods are public AND ABSTRACT by default. You cannot use access modifiers other than public.
// All fields in an INTERFACE are implicitly public, static, and final. This means they are constants and cannot be modified.
// INTERFACEs cannot have constructors,
// Classes that implement INTERFACEs can use constructors, static blocks, and instance blocks.
// All methods in an INTERFACE are implicitly public and abstract (except default and static methods).
// Yes, we can declare an INTERFACE with “abstract” keyword. But, there is no need to write like that. All INTERFACEs in java are abstract by default.
//  Can we override an INTERFACE method with visibility other than public? NO
//  INTERFACEs don’t extend Object class.
// INTERFACEs can’t have static methods.
// 
// 
// 































