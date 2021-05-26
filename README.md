# A Markdown Blog Webpage
A blog-website with markdown support.

## Installation
1. Clone the repository.
    ```
    git clone https://github.com/harjyotbagga/md-blog.git
    cd md-blog
    ```
2. Setup environment variables
    - Create a .env file and fill in the environment variables, in the format of .env.example
3. Install dependencies
    ```
    npm i
    ```
    OR 
    Just build the docker file
    ```
    docker build -t <your username>/md-blog .
    ```


4. Run the server
    ```
    npm start
    ```
    OR
    Just run the docker image
    ```
    docker run -p 8080:8080 <your username>/md-blog
    ```
    goto http://localhost:8080/