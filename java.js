// ----------------------------------------------ENCAPSULATION----------------------------------------

// ---------Private:
//  only within the class.cannot be accessed from outside the class.
// Private methods cannot be overridden. They are not visible to subclasses, so you cannot change their behavior in derived classes.
// you cannot create a subclass of a class that has a private constructor.
// Top-level classes cannot be private; they must be either public or package-private.
// static members of a class can be private.
// 
// 

// ---------Default: 
// only within the package. It cannot be accessed from outside the package.
//  If you do not specify any access level, it will be the default.
// In Java, methods with default access (no modifier specified) can be overridden in subclasses, but only if those subclasses are in the same package.

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
