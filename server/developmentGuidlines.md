# Project standards

## Naming Convention

Files and folders should follow **PascalCase**.

### Classes

- Classes should be named in PascalCase and be self-descriptive.
- Class interface's should match the class name **exactly** and be leading with an **I**.
- A class and its interface should be stored inside a dedicated folder for that class e.g:
  - Class/
    - Class.cs
    - IClass.cs

### Variables

Variables should be named in camelCase and be self-descriptive.

- Read only variables should start with an underline, e.g. `\_readOnlyVariable``.

## Folders and files

### File standard

- Keep files under 200 lines if possible.
- Separate different responsibilities into its own modules.

## Folder Structure

- server.sln
- developmentGuidlines.md
  - api/
    - api.csproj
    - appsettings.Development.json
    - appsettings.json
    - Program.cs
    - Controllers/ - Controller files, e.g. `SquareController.cs`.
    - Data/ - Files that store data on the server, e.g. `SquareData.json`.
    - Dtos/ - Dto (Data transfer objects) files, e.g. `SquareDto.cs`.
    - Hubs/ - Hub files, e.g. `SignalRHub.cs`.
    - Models/ - Entity Model files, e.g. `Square.cs`.
    - Properties/
      - launchSettings.json
    - Repositories/ - Isolated folders for each repository, e.g. `SquareRepository`.
    - Services/ - Isolated folders for each service, e.g. `ValidateColorService`.
    - Utils/ - Global utility classes.
