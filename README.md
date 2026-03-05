1. What is JSX, and why is it used?
Ans: JSX (JavaScript XML) হলো JavaScript এর একটি syntax extension যা React এ ব্যবহার করা হয়। JSX ব্যবহার করে আমরা HTML এর মত করে UI লিখতে পারি JavaScript এর ভিতরে।

2. What is the difference between State and Props?
State	                                       Props
Component এর ভিতরের data	     Parent component থেকে আসা data
Change করা যায়	                  Change করা যায় না (read-only)
useState দিয়ে manage করা হয়	      Parent component pass করে

3. What is the useState hook, and how does it work?
Ans: useState হলো React এর একটি hook যা functional component এ state ব্যবহার করতে দেয়।
How it works:
1.useState(0) initial value set করে
2.count বর্তমান value
3.setCount() দিয়ে value update করা হয়
4.Update হলে component re-render হয়

4. How can you share state between components in React?
Ans: React এ state share করার সবচেয়ে common উপায় হলো Lifting State Up।
মানে state কে parent component এ রাখা হয় এবং props দিয়ে child component এ পাঠানো হয়।

5. How is event handling done in React?
Ans: React এ event handling করা হয় camelCase syntax দিয়ে এবং function pass করে।
Example:

function App() {

  const handleClick = () => {
    alert("Button clicked");
  };

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}
