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





