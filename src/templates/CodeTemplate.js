const CodeTemplates = {

    "c": "#include <stdio.h>\n\nint main() {\n    //your code goes here\n    printf(\"Hello World\");\n    return 0;\n}"
    ,
    "cpp": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // write your code here\n    cout << \"Hello World\" << endl;\n    return 0;\n}"
    ,
    "python": "def main():\n    # write your code here\n    pass\n\nif __name__ == '__main__':\n    main()"
    ,
    "java": "public class Main {\n    public static void main(String[] args) {\n        // write your code here\n        System.out.println(\"Hello World\");\n    }\n}"
    ,
    "javascript": "console.log('Hello, World!');\n\nfunction main() {\n    // write your code here\n}\n\nmain();"
  
  }
  
  
  export default CodeTemplates;
  