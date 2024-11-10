# Docker Commands and Basics

## 1. Containers

### 1.1 List Running Containers
   - Command: `docker ps`
     - Shows only the running containers.

### 1.2 List All Containers (Including Stopped)
   - Command: `docker ps -a`
     - Lists all containers, including both running and stopped ones.

### 1.3 Remove a Container
   - Command: `docker rm <container_id or container_name>`
     - Deletes the specified container. Replace `<container_id or container_name>` with the actual ID or name of the container.

### 1.4 Run a Container with Auto-Remove Option
   - Command: `docker run -p <host_port>:<container_port> --rm -d <image_id>`
     - Runs a container detached (`-d`), mapping the specified ports. The `--rm` option automatically removes the container when it stops.
     - Example:
       ```bash
       docker run -p 4600:3000 --rm -d sha256:e14ce36f4a8ae921b35aeb15cf861e052bd2a174797d12aee5cc4a8c7587ffb8
       ```

### 1.5 Assigning a Custom Name to a Container
   - Command: `docker run --name <container_name> -p <host_port>:<container_port> -d <image_id>`
     - The `--name` option assigns a custom name to the container for easier reference.
     - Example:
       ```bash
       docker run --name my_container_name -p 4600:3000 -d <image_id>
       ```

---

## 2. Images

### 2.1 Build an Image
   - Command: `docker build .`
     - Builds an image from the Dockerfile in the current directory.

### 2.2 Build an Image with a Custom Name and Tag
   - Command: `docker build -t <name>:<version> .`
     - Assigns a name and version to the image.
     - Examples:
       ```bash
       docker build -t nitesh:v1 .
       docker build -t nitesh:v2 .
       ```
     - The image IDs remain the same if there are no changes to the files, but the tags (`v1`, `v2`) differentiate them.
     - If files in the folder are updated, the image ID changes.

### 2.3 Remove an Image
   - Command: `docker rmi <image_name:tag>`
     - Deletes the specified image by name and tag.
     - Example:
       ```bash
       docker rmi nitesh:v1
       ```

---

## 3. Additional Docker Commands

### 3.1 Running a Docker Container in Interactive Mode
   - Command: `docker run --name <container_name> -it <image_name:tag>`
     - Runs a Docker container in interactive mode, allowing you to interact with it through a terminal session.
     - Example:
       ```bash
       docker run --name py122 -it py:v1
       ```
     - Explanation:
       - `--name py122` assigns the name `py122` to the container.
       - `-it` runs the container in interactive mode with a terminal.
       - `py:v1` is the name and tag of the image used.

### 3.2 Tagging (Renaming) a Docker Image
   - Command: `docker tag <old_image_name:old_tag> <new_image_name:new_tag>`
     - Tags or renames a Docker image.
     - Example:
       ```bash
       docker tag py:v1 niteshdk11/py:v1
       ```
     - Explanation:
       - `py:v1` is the original image name and tag.
       - `niteshdk11/py:v1` is the new name and tag for the image.




## Docker Container Commands

1. **Running a Container with a Volume**  
   Use the following command to run a container with a volume:
   ```bash
   docker run -it -v myvolume:/my-app/ nitesh:v1
   ```
   - **Explanation**: `-v myvolume:/my-app/` mounts a Docker volume named `myvolume` to the `/my-app/` directory in the container.
   - Ensure `/my-app/` is the working directory when creating the image file.

2. **Starting an Existing Container**  
   Start an existing container using:
   ```bash
   docker start <container_name_or_id>
   ```
   - To attach to the terminal of a running container, use:
     ```bash
     docker attach <container_name_or_id>
     ```
   - **Note**: Ensure the container is running before using `docker attach`.

## Docker Volumes

1. **Listing Docker Volumes**
   - To see a list of Docker volumes:
     ```bash
     docker volume ls
     ```
   - Use `--help` with `docker volume` for additional options.

2. **Bind Mounts**
   - **Definition**: A bind mount lets you link a local directory or file to a directory in the container.
   - **Benefit**: Changes made in the local directory are immediately reflected in the container.
   
   Example:
   ```bash
   docker run -it --rm -v /local/path/to/file.txt:/container/path/file.txt nitesh:v1
   ```
   - **Explanation**: The local file `/local/path/to/file.txt` is mounted to `/container/path/file.txt` in the container.

   Mounting an entire folder:
   ```bash
   docker run -it --rm -v /home/nitesh-dk/LNX-NITESH-DK/Micro-Mastery/Docker/:/my-app/ nk:v1
   ```

3. **Ignoring Files with .dockerignore**
   - The `.dockerignore` file works like `.gitignore`, specifying files and folders to ignore when building Docker images.

## Connecting from a Container to the Host Database

- To access a localhost database from a container, use `host.docker.internal` as the host address in your code.
  - Example in Python or JavaScript:
    ```python
    host = "host.docker.internal"
    ```

This configuration allows your containerized application to connect to services running on the host machine (e.g., a local database) without additional network setup.

---


Working with multiple containers 


1. **Start MongoDB container**:
   ```bash
   docker run -d --name mongo-db -p 27017:27017 mongo
   ```
   - Name: `mongo-db`
   - Port: `27017` (default MongoDB port)

2. **Start Node.js container and link to MongoDB**:
   ```bash
   docker run --name node-app --link mongo-db:mongo -p 3000:7000 nk:v1
   ```
   - Link `mongo-db` container with alias `mongo`.
   - Node.js app connects to MongoDB using `mongodb://mongo:27017/mydatabase`.

### Key Points:
- `mongo-db` is the actual MongoDB container.
- `mongo` is the alias used to connect to it from `node-app`.
- **The alias in `--link` and the MongoDB URI (`mongodb://mongo:27017/mydatabase`) should match**.