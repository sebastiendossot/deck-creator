FROM python:3.7
  
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV POSTGRES_ENGINE "django.db.backends.postgresql"
ENV POSTGRES_NAME "postgres"
ENV POSTGRES_USER "postgres"
ENV POSTGRES_PASSWORD "postgres"
ENV POSTGRES_HOST "db"
ENV POSTGRES_PORT 5432

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

RUN cd ./docker_django/frontend/ && npm install && npm run postinstall && npm run build

EXPOSE 8030
