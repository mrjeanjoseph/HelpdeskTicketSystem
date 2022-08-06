using Microsoft.EntityFrameworkCore.Migrations;

namespace ServiceDesk.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Tickets",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Status = table.Column<bool>(type: "bit", nullable: true),
                    TicketName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Issue = table.Column<string>(type: "text", nullable: true),
                    OpenedBy = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tickets", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "BookMarked",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TicketID = table.Column<int>(type: "int", nullable: true),
                    BookMarkedBy = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BookMarked", x => x.ID);
                    table.ForeignKey(
                        name: "FK__BookMarke__Ticke__49C3F6B7",
                        column: x => x.TicketID,
                        principalTable: "Tickets",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Resolution",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false),
                    TicketName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Resolution = table.Column<string>(type: "text", nullable: true),
                    ClosedBy = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Resolution", x => x.ID);
                    table.ForeignKey(
                        name: "FK__Resolution__ID__3C69FB99",
                        column: x => x.ID,
                        principalTable: "Tickets",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BookMarked_TicketID",
                table: "BookMarked",
                column: "TicketID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BookMarked");

            migrationBuilder.DropTable(
                name: "Resolution");

            migrationBuilder.DropTable(
                name: "Tickets");
        }
    }
}
