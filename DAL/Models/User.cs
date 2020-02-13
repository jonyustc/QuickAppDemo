using System.Collections.Generic;

namespace DAL.Models
{
    public class User : AuditableEntity
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public UserProfile UserProfile { get; set; }
        public ICollection<UserRole> UserRoles { get; set; }
    }
}