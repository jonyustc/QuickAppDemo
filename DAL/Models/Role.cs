using System.Collections.Generic;

namespace DAL.Models
{
    public class Role : AuditableEntity
    {
        public int Id { get; set; }
        public string RoleName { get; set; }
        public string RoleDescription { get; set; }
        public ICollection<UserRole> UserRoles { get; set; }
    }
}