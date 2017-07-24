require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module TravelSmart
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    config.paperclip_defaults = {
      :s3_host_name => "s3-#{ENV["s3_region"]}.amazonaws.com",
      :storage => :s3,
      :s3_region => "us-west-1",
      :bucket => ENV["s3_bucket"],
      :s3_credentials => {
        :access_key_id => ENV["s3_access_key_id"],
        :secret_access_key => ENV["s3_secret_access_key"],
        :url => ":s3_host_name"
      }
    }

    config.active_record.raise_in_transactional_callbacks = true
  end
end
