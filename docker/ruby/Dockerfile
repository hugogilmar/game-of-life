FROM ruby:3.3.4-slim-bookworm

# Install additional packages.
RUN apt update -qq
RUN apt install -y postgresql-client libpq-dev nodejs build-essential git curl unzip

# Install bun.
RUN curl -fsSL https://bun.sh/install | bash

# Prepare working directory.
WORKDIR /workdir
COPY ./ /workdir
RUN gem install bundler
RUN bundle install

# Configure endpoint.
COPY ./docker/ruby/entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

# Start app server.
CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]