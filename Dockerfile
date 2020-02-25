FROM python:3.7
  
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -y nodejs 
RUN npm install npm@latest -g
RUN npm -v
RUN node -v

# Django part

RUN mkdir /app

WORKDIR /app

COPY requirements.txt /app/

RUN pip3 install -r requirements.txt

COPY . /app/

RUN cd ./docker_django/frontend/ && npm install && npm run build

EXPOSE 8030
