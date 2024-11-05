# Docker Commands and Basics

## Containers

- **List Running Containers**
  - `docker ps`
    - Shows only the running containers.

- **List All Containers (Including Stopped)**
  - `docker ps -a`
    - Lists all containers, including both running and stopped ones.

- **Remove a Container**
  - `docker rm <container_id or container_name>`
    - Deletes the specified container. Replace `<container_id or container_name>` with the actual ID or name of the container.

- **Run a Container with Auto-Remove Option**
  - `docker run -p <host_port>:<container_port> --rm -d <image_id>`
    - Runs a container detached (`-d`), mapping the specified ports. The `--rm` option automatically removes the container when it stops.
    - Example:
      ```bash
      docker run -p 4600:3000 --rm -d sha256:e14ce36f4a8ae921b35aeb15cf861e052bd2a174797d12aee5cc4a8c7587ffb8
      ```

- **Assigning a Custom Name to a Container**
  - Use the `--name` option to give a container a custom name for easier reference.
  - Example:
    ```bash
    docker run --name my_container_name -p 4600:3000 -d <image_id>
    ```

---

## Images

- **Build an Image**
  - If the Dockerfile is in the root directory, you can build an image with:
    ```bash
    docker build .
    ```

- **Build an Image with a Custom Name and Tag**
  - `docker build -t <name>:<version> .`
    - Assigns a name and version to the image.
  - Examples:
    ```bash
    docker build -t nitesh:v1 .
    docker build -t nitesh:v2 .
    ```
    - The image IDs remain the same if there are no changes to the files, but the tags (`v1`, `v2`) differentiate them.
    - If files in the folder are updated, the image ID changes.

- **Remove an Image**
  - `docker rmi <image_name:tag>`
    - Deletes the specified image by name and tag.
  - Example:
    ```bash
    docker rmi nitesh:v1
    ```

--- 

<!--  sp tpp run anf thing in intercative mode we can use -it with the docker run dommand  -->
 docker run --name py122  -it py:v1                                                                                                         ──(Tue,Nov05)─┘
