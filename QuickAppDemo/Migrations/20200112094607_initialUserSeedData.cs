using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickAppDemo.Migrations
{
    public partial class initialUserSeedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Roles",
                columns: new[] { "Id", "CreatedBy", "CreatedDate", "RoleDescription", "RoleName", "UpdatedBy", "UpdatedDate" },
                values: new object[] { 1, null, new DateTime(2020, 1, 12, 15, 46, 7, 664, DateTimeKind.Local).AddTicks(3803), null, "Admin", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "CreatedBy", "CreatedDate", "Email", "Password", "UpdatedBy", "UpdatedDate", "UserName" },
                values: new object[] { 1, null, new DateTime(2020, 1, 12, 15, 46, 7, 663, DateTimeKind.Local).AddTicks(2334), "admin@example.com", "12345", null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "admin" });

            migrationBuilder.InsertData(
                table: "UserRoles",
                columns: new[] { "UserId", "RoleId" },
                values: new object[] { 1, 1 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "UserRoles",
                keyColumns: new[] { "UserId", "RoleId" },
                keyValues: new object[] { 1, 1 });

            migrationBuilder.DeleteData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1);
        }
    }
}
