/*
 * Copyright 2013 Palantir Technologies, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

///<reference path="../../../typings/typescriptServices.d.ts" />

module Lint {
    export class SyntaxWalker {
        public walk(node: ts.Node) {
            this.visitNode(node);
        }

        protected visitAnyKeyword(node: ts.Node) {
            this.walkChildren(node);
        }

        protected visitArrowFunction(node: ts.FunctionLikeDeclaration) {
            this.walkChildren(node);
        }

        protected visitBinaryExpression(node: ts.BinaryExpression) {
            this.walkChildren(node);
        }

        protected visitBlock(node: ts.Block) {
            this.walkChildren(node);
        }

        protected visitBreakStatement(node: ts.BreakOrContinueStatement) {
            this.walkChildren(node);
        }

        protected visitCallExpression(node: ts.CallExpression) {
            this.walkChildren(node);
        }

        protected visitCaseClause(node: ts.CaseClause) {
            this.walkChildren(node);
        }

        protected visitClassDeclaration(node: ts.ClassDeclaration) {
            this.walkChildren(node);
        }

        protected visitCatchClause(node: ts.CatchClause) {
            this.walkChildren(node);
        }

        protected visitConditionalExpression(node: ts.ConditionalExpression) {
            this.walkChildren(node);
        }

        protected visitConstructorDeclaration(node: ts.ConstructorDeclaration) {
            this.walkChildren(node);
        }

        protected visitConstructorType(node: ts.Node) {
            this.walkChildren(node);
        }

        protected visitContinueStatement(node: ts.BreakOrContinueStatement) {
            this.walkChildren(node);
        }

        protected visitDebuggerStatement(node: ts.Statement) {
            this.walkChildren(node);
        }

        protected visitDefaultClause(node: ts.DefaultClause) {
            this.walkChildren(node);
        }

        protected visitDoStatement(node: ts.DoStatement) {
            this.walkChildren(node);
        }

        protected visitElementAccessExpression(node: ts.ElementAccessExpression) {
            this.walkChildren(node);
        }

        protected visitEnumDeclaration(node: ts.EnumDeclaration) {
            this.walkChildren(node);
        }

        protected visitExportAssignment(node: ts.ExportAssignment) {
            this.walkChildren(node);
        }

        protected visitExpressionStatement(node: ts.ExpressionStatement) {
            this.walkChildren(node);
        }

        protected visitForStatement(node: ts.ForStatement) {
            this.walkChildren(node);
        }

        protected visitForInStatement(node: ts.ForInStatement) {
            this.walkChildren(node);
        }

        protected visitFunctionDeclaration(node: ts.FunctionDeclaration) {
            this.walkChildren(node);
        }

        protected visitFunctionExpression(node: ts.FunctionExpression) {
            this.walkChildren(node);
        }

        protected visitFunctionType(node: ts.Node) {
            this.walkChildren(node);
        }

        protected visitGetAccessor(node: ts.AccessorDeclaration) {
            this.walkChildren(node);
        }

        protected visitIdentifier(node: ts.Identifier) {
            this.walkChildren(node);
        }

        protected visitIfStatement(node: ts.IfStatement) {
            this.walkChildren(node);
        }

        protected visitImportDeclaration(node: ts.ImportDeclaration) {
            this.walkChildren(node);
        }

        protected visitIndexSignatureDeclaration(node: ts.IndexSignatureDeclaration) {
            this.walkChildren(node);
        }

        protected visitInterfaceDeclaration(node: ts.InterfaceDeclaration) {
            this.walkChildren(node);
        }

        protected visitLabeledStatement(node: ts.LabeledStatement) {
            this.walkChildren(node);
        }

        protected visitMethodDeclaration(node: ts.MethodDeclaration) {
            this.walkChildren(node);
        }

        protected visitModuleDeclaration(node: ts.ModuleDeclaration) {
            this.walkChildren(node);
        }

        protected visitNewExpression(node: ts.NewExpression) {
            this.walkChildren(node);
        }

        protected visitObjectLiteralExpression(node: ts.ObjectLiteralExpression) {
            this.walkChildren(node);
        }

        protected visitParameterDeclaration(node: ts.ParameterDeclaration) {
            this.walkChildren(node);
        }

        protected visitPostfixUnaryExpression(node: ts.PostfixUnaryExpression) {
            this.walkChildren(node);
        }

        protected visitPrefixUnaryExpression(node: ts.PrefixUnaryExpression) {
            this.walkChildren(node);
        }

        protected visitPropertyAccessExpression(node: ts.PropertyAccessExpression) {
            this.walkChildren(node);
        }

        protected visitPropertyAssignment(node: ts.PropertyAssignment) {
            this.walkChildren(node);
        }

        protected visitPropertyDeclaration(node: ts.PropertyDeclaration) {
            this.walkChildren(node);
        }

        protected visitRegularExpressionLiteral(node: ts.Node) {
            this.walkChildren(node);
        }

        protected visitReturnStatement(node: ts.ReturnStatement) {
            this.walkChildren(node);
        }

        protected visitSetAccessor(node: ts.AccessorDeclaration) {
            this.walkChildren(node);
        }

        protected visitSourceFile(node: ts.SourceFile) {
            this.walkChildren(node);
        }

        protected visitSwitchStatement(node: ts.SwitchStatement) {
            this.walkChildren(node);
        }

        protected visitTemplateExpression(node: ts.TemplateExpression) {
            this.walkChildren(node);
        }

        protected visitThrowStatement(node: ts.ThrowStatement) {
            this.walkChildren(node);
        }

        protected visitTryBlock(node: ts.Block) {
            this.walkChildren(node);
        }

        protected visitTryStatement(node: ts.TryStatement) {
            this.walkChildren(node);
        }

        protected visitTypeAssertionExpression(node: ts.TypeAssertion) {
            this.walkChildren(node);
        }

        protected visitTypeLiteral(node: ts.TypeLiteralNode) {
            this.walkChildren(node);
        }

        protected visitVariableDeclaration(node: ts.VariableDeclaration) {
            this.walkChildren(node);
        }

        protected visitVariableStatement(node: ts.VariableStatement) {
            this.walkChildren(node);
        }

        protected visitWhileStatement(node: ts.WhileStatement) {
            this.walkChildren(node);
        }

        protected visitNode(node: ts.Node) {
            switch (node.kind) {
                case ts.SyntaxKind.AnyKeyword:
                    this.visitAnyKeyword(node);
                    break;

                case ts.SyntaxKind.ArrowFunction:
                    this.visitArrowFunction(<ts.FunctionLikeDeclaration> node);
                    break;

                case ts.SyntaxKind.BinaryExpression:
                    this.visitBinaryExpression(<ts.BinaryExpression> node);
                    break;

                case ts.SyntaxKind.Block:
                    this.visitBlock(<ts.Block> node);
                    break;

                case ts.SyntaxKind.BreakStatement:
                    this.visitBreakStatement(<ts.BreakOrContinueStatement> node);
                    break;

                case ts.SyntaxKind.CallExpression:
                    this.visitCallExpression(<ts.CallExpression> node);
                    break;

                case ts.SyntaxKind.CaseClause:
                    this.visitCaseClause(<ts.CaseClause> node);
                    break;

                case ts.SyntaxKind.ClassDeclaration:
                    this.visitClassDeclaration(<ts.ClassDeclaration> node);
                    break;

                case ts.SyntaxKind.CatchClause:
                    this.visitCatchClause(<ts.CatchClause> node);
                    break;

                case ts.SyntaxKind.ConditionalExpression:
                    this.visitConditionalExpression(<ts.ConditionalExpression> node);
                    break;

                case ts.SyntaxKind.Constructor:
                    this.visitConstructorDeclaration(<ts.ConstructorDeclaration> node);
                    break;

                case ts.SyntaxKind.ConstructorType:
                    this.visitConstructorType(node);
                    break;

                case ts.SyntaxKind.ContinueStatement:
                    this.visitContinueStatement(<ts.BreakOrContinueStatement> node);
                    break;

                case ts.SyntaxKind.DebuggerStatement:
                    this.visitDebuggerStatement(<ts.Statement> node);
                    break;

                case ts.SyntaxKind.DefaultClause:
                    this.visitDefaultClause(<ts.DefaultClause> node);
                    break;

                case ts.SyntaxKind.DoStatement:
                    this.visitDoStatement(<ts.DoStatement> node);
                    break;

                case ts.SyntaxKind.ElementAccessExpression:
                    this.visitElementAccessExpression(<ts.ElementAccessExpression> node);
                    break;

                case ts.SyntaxKind.EnumDeclaration:
                    this.visitEnumDeclaration(<ts.EnumDeclaration> node);
                    break;

                case ts.SyntaxKind.ExportAssignment:
                    this.visitExportAssignment(<ts.ExportAssignment> node);
                    break;

                case ts.SyntaxKind.ExpressionStatement:
                    this.visitExpressionStatement(<ts.ExpressionStatement> node);
                    break;

                case ts.SyntaxKind.ForStatement:
                    this.visitForStatement(<ts.ForStatement> node);
                    break;

                case ts.SyntaxKind.ForInStatement:
                    this.visitForInStatement(<ts.ForInStatement> node);
                    break;

                case ts.SyntaxKind.FunctionDeclaration:
                    this.visitFunctionDeclaration(<ts.FunctionDeclaration> node);
                    break;

                case ts.SyntaxKind.FunctionExpression:
                    this.visitFunctionExpression(<ts.FunctionExpression> node);
                    break;

                case ts.SyntaxKind.FunctionType:
                    this.visitFunctionType(node);
                    break;

                case ts.SyntaxKind.GetAccessor:
                    this.visitGetAccessor(<ts.AccessorDeclaration> node);
                    break;

                case ts.SyntaxKind.Identifier:
                    this.visitIdentifier(<ts.Identifier> node);
                    break;

                case ts.SyntaxKind.IfStatement:
                    this.visitIfStatement(<ts.IfStatement> node);
                    break;

                case ts.SyntaxKind.ImportDeclaration:
                    this.visitImportDeclaration(<ts.ImportDeclaration> node);
                    break;

                case ts.SyntaxKind.IndexSignature:
                    this.visitIndexSignatureDeclaration(<ts.IndexSignatureDeclaration> node);
                    break;

                case ts.SyntaxKind.InterfaceDeclaration:
                    this.visitInterfaceDeclaration(<ts.InterfaceDeclaration> node);
                    break;

                case ts.SyntaxKind.LabeledStatement:
                    this.visitLabeledStatement(<ts.LabeledStatement> node);
                    break;

                case ts.SyntaxKind.Method:
                    this.visitMethodDeclaration(<ts.MethodDeclaration> node);
                    break;

                case ts.SyntaxKind.ModuleDeclaration:
                    this.visitModuleDeclaration(<ts.ModuleDeclaration> node);
                    break;

                case ts.SyntaxKind.NewExpression:
                    this.visitNewExpression(<ts.NewExpression> node);
                    break;

                case ts.SyntaxKind.ObjectLiteralExpression:
                    this.visitObjectLiteralExpression(<ts.ObjectLiteralExpression> node);
                    break;

                case ts.SyntaxKind.Parameter:
                    this.visitParameterDeclaration(<ts.ParameterDeclaration> node);
                    break;

                case ts.SyntaxKind.PostfixUnaryExpression:
                    this.visitPostfixUnaryExpression(<ts.PostfixUnaryExpression> node);
                    break;

                case ts.SyntaxKind.PrefixUnaryExpression:
                    this.visitPrefixUnaryExpression(<ts.PrefixUnaryExpression> node);
                    break;

                case ts.SyntaxKind.PropertyAccessExpression:
                    this.visitPropertyAccessExpression(<ts.PropertyAccessExpression> node);
                    break;

                case ts.SyntaxKind.PropertyAssignment:
                    this.visitPropertyAssignment(<ts.PropertyAssignment> node);
                    break;

                case ts.SyntaxKind.Property:
                    this.visitPropertyDeclaration(<ts.PropertyDeclaration> node);
                    break;

                case ts.SyntaxKind.RegularExpressionLiteral:
                    this.visitRegularExpressionLiteral(node);
                    break;

                case ts.SyntaxKind.ReturnStatement:
                    this.visitReturnStatement(<ts.ReturnStatement> node);
                    break;

                case ts.SyntaxKind.SetAccessor:
                    this.visitSetAccessor(<ts.AccessorDeclaration> node);
                    break;

                case ts.SyntaxKind.SourceFile:
                    this.visitSourceFile(<ts.SourceFile> node);
                    break;

                case ts.SyntaxKind.SwitchStatement:
                    this.visitSwitchStatement(<ts.SwitchStatement> node);
                    break;

                case ts.SyntaxKind.TemplateExpression:
                    this.visitTemplateExpression(<ts.TemplateExpression> node);
                    break;

                case ts.SyntaxKind.ThrowStatement:
                    this.visitThrowStatement(<ts.ThrowStatement> node);
                    break;

                case ts.SyntaxKind.TryBlock:
                    this.visitTryBlock(<ts.Block> node);
                    break;

                case ts.SyntaxKind.TryStatement:
                    this.visitTryStatement(<ts.TryStatement> node);
                    break;

                case ts.SyntaxKind.TypeAssertionExpression:
                    this.visitTypeAssertionExpression(<ts.TypeAssertion> node);
                    break;

                case ts.SyntaxKind.TypeLiteral:
                    this.visitTypeLiteral(<ts.TypeLiteralNode> node);
                    break;

                case ts.SyntaxKind.VariableDeclaration:
                    this.visitVariableDeclaration(<ts.VariableDeclaration> node);
                    break;

                case ts.SyntaxKind.VariableStatement:
                    this.visitVariableStatement(<ts.VariableStatement> node);
                    break;

                case ts.SyntaxKind.WhileStatement:
                    this.visitWhileStatement(<ts.WhileStatement> node);
                    break;

                default:
                    this.walkChildren(node);
                    break;
            }
        }

        private walkChildren(node: ts.Node) {
            ts.forEachChild(node, (child) => this.visitNode(child));
        }
    }
}
