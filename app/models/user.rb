class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    validates :session_token, :password_digest, presence: true
    validate :password, length { minimum: 6 } , allow_nil: true
    
    after_initialize :ensure_session_token
    
    attr_reader :password

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        user && user.isPassword?(password) user: nil
    end

    def isPassword(password)
        BCrypt::Password.new(self.password_digest).isPassword?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token || SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end
    
end
